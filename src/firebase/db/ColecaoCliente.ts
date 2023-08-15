import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { firebase, db } from "../config";
import firebaseApp from "firebase/compat/app";
import {
  CollectionReference,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default class ColecaoCliente implements ClienteRepositorio {
  private colecao: CollectionReference = collection(db, "clientes");

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      const docRef = doc(db, "clientes", cliente.id);
      const result = await getDoc(docRef);
      await updateDoc(docRef, cliente.toJSON());
      return result.data() as Cliente;
    } else {
      const docRef = await addDoc(this.colecao, cliente.toJSON());
      const result = await getDoc(docRef);
      return result.data() as Cliente;
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    const docRef = doc(db, "clientes", cliente.id);
    const result = await deleteDoc(docRef);
    return result;
  }

  async buscarTodos(): Promise<Cliente[]> {
    const query = await getDocs(this.colecao);
    const clientes: Cliente[] = [];
    query.forEach((doc) => {
      const cliente = new Cliente(doc.data().nome, doc.data().idade, doc.id);
      clientes.push(cliente);
    });
    return clientes;
  }
}
