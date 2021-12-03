<template>
<v-app>

  <!-- NAV BAR INICIO --> 
  <v-app-bar app>
    <v-tabs
    fixed-tabs
    background-color="#BBDEFB"
  >
    <v-tooltip>
      <span>Menu Principal</span>
    </v-tooltip>
  <v-btn
      class="mx-16"
      fab
      to = "/main"
    >
      <v-icon>
        mdi-home-outline
      </v-icon>
    </v-btn>
    <v-tab to="/clientes">
      Clientes
    </v-tab>
    <v-tab to="/endereco">
      Endereço
    </v-tab>
    <v-tab to="/carro">
      Carro
    </v-tab>
    <v-tab to="/tabelapreco">
      Tabela Preço
    </v-tab>
  </v-tabs>
  </v-app-bar>
  <!-- NAV BAR FIM --> 

  <!-- CADASTROS --> 
    <v-container style="margin-top: 130px">
 <v-row justify="center">
    <v-col
      cols="9"
      sm="6"
    >
      <v-card>
        <v-card-title class="cyan darken-1">
          <span class="text-h5 white--text">Cadastro de Endereços</span>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-list>


     <v-row>
        <v-col md="2"
        style="margin-left: 200px">
          <v-text-field
            label="ID Endereço"
            placeholder="Insira o ID do endereço"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col md="5"
         style="margin-left: 200px">
          <v-text-field
            label="CEP"
            placeholder="Digite o cep"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="5"
        style="margin-left: 200px">
          <v-text-field
            label="Cidade"
            placeholder="Digite a cidade"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="5"
        style="margin-left: 200px">
          <v-text-field
            label="Bairro"
            placeholder="Digite o Bairro"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="5"
        style="margin-left: 200px">
          <v-text-field
            label="Número"
            placeholder="Digite o núemro da residencia"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="8"
        style="margin-left: 200px">
          <v-text-field
            label="Complemento"
            placeholder="Ex: proxímo ao mercado x"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

        </v-list>


             <!-- BTN SALVAR, EDITAR, LISTAR -->
         <v-card-title class="grey lighten-4">
          <span class="text-h5 white--text"></span>
          <v-spacer></v-spacer>

     <v-row
     style="margin-left: 0px">
          <v-btn
            depressed
            elevation="2"
            class="mr-10"
            color="success"
    
            >
       <v-icon left>
         mdi-checkbox-marked
       </v-icon>
          Salvar</v-btn>

          <v-btn
            depressed
            elevation="2"
            class="mr-10"
            color="#FFEB3B"
            >
       <v-icon left>
         mdi-pencil
       </v-icon>
          Editar</v-btn>

           <v-btn
            depressed
            elevation="2"
            class="mr-10"
            to="/listaendereco"
            color="#81D4FA"
            >
       <v-icon left>
         mdi-clipboard-text
       </v-icon>
          Listar</v-btn>
      </v-row>
        </v-card-title>
             <!-- BTN SALVAR, EDITAR, LISTAR -->
             
      </v-card>
    </v-col>
  </v-row>
            
    </v-container>
  <!-- CADASTROS --> 

  </v-app>
</template>


<script>

</script>

<style>

</style>