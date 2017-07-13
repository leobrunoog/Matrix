var obj = {
  email: "",
  nome: "",
  sexo: "",
  curso: "",
  endereco: "",
  complemento: "",
  cep: "",
  uf: ""
}

new Vue ({
  el: "#a",
  data: function() {
      return obj;
  },
  created: function() {				
  var valor = JSON.parse(localStorage.getItem("data"));
	if(valor){
        this.nome = valor.nome,
        this.email = valor.email,
        this.curso = valor.curso,
        this.sexo = valor.sexo,
        this.endereco = valor.endereco,
        this.complemento = valor.complemento,
        this.cep = valor.cep,
        this.uf = valor.uf
    }
  },
  methods: {
      salvar: function(){
       localStorage.setItem("data", JSON.stringify(obj));}
  }
  
});
