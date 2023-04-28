var sala = {
    idenetificação: {
        nome: "1D",
        andar: 3,
    },
    capacidade: {
        pessoas: 50,
        mesas: 20,
        cadeiras: 50,
    },
    equipamentos: {
        projetor: true,
        arcondicionado: true,
        computadores: 20,
    },
    disponibilidade: function() {
        if (this.capacidade.pessoas != this.capacidade.cadeiras) {
            return false;
        } else {
            return true;
        }
    },
    comecarAula: function() {
        if (this.equipamentos.computadores < this.capacidade.pessoas) {
            return "Não vai ter Notebook para todo mundo";
        } else {
            return "Vai sobrar Notebook!";
        }
    }
}