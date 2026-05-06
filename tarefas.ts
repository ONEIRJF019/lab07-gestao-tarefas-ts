class Tarefa {
  id: number;
  descricao: string;
  status: string;
  projeto: string;

  constructor(id: number, descricao: string, status: string, projeto: string) {
    this.id = id;
    this.descricao = descricao;
    this.status = status;
    this.projeto = projeto;
  }
}

class GestorTarefas {
  private tarefas: Tarefa[] = [];

  adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa.descricao}" adicionada com sucesso.`);
  }

  atualizarStatus(id: number, status: string): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (!tarefa) {
      console.log(`Tarefa com ID ${id} não encontrada.`);
      return;
    }
    tarefa.status = status;
    console.log(`Status da tarefa "${tarefa.descricao}" atualizado para "${status}".`);
  }

  consultarTarefasPorProjeto(projeto: string): Tarefa[] {
    const resultado = this.tarefas.filter(t => t.projeto === projeto);
    if (resultado.length === 0) {
      console.log(`Nenhuma tarefa encontrada para o projeto "${projeto}".`);
    }
    return resultado;
  }
}

function adicionarTarefas(gestor: GestorTarefas): void {
  const tarefa1 = new Tarefa(1, "Criar tela de login", "Pendente", "Site Institucional");
  const tarefa2 = new Tarefa(2, "Desenvolver API de usuários", "Em Andamento", "Site Institucional");
  const tarefa3 = new Tarefa(3, "Configurar banco de dados", "Concluída", "App Mobile");

  gestor.adicionarTarefa(tarefa1);
  gestor.adicionarTarefa(tarefa2);
  gestor.adicionarTarefa(tarefa3);
}

function atualizarStatus(gestor: GestorTarefas, id: number, novoStatus: string): void {
  gestor.atualizarStatus(id, novoStatus);
}

function consultarTarefasPorProjeto(gestor: GestorTarefas, projeto: string): void {
  const tarefas: Tarefa[] = gestor.consultarTarefasPorProjeto(projeto);
  tarefas.forEach(t => {
    console.log(`ID: ${t.id} | Descrição: ${t.descricao} | Status: ${t.status} | Projeto: ${t.projeto}`);
  });
}

const meuGestor = new GestorTarefas();

adicionarTarefas(meuGestor);
atualizarStatus(meuGestor, 1, "Em Andamento");
consultarTarefasPorProjeto(meuGestor, "Site Institucional");
consultarTarefasPorProjeto(meuGestor, "Projeto Inexistente");