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
          <span class="text-h5 white--text">Cadastro de Tabela Preço</span>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-list>


     <v-row>
        <v-col md="2"
        style="margin-left: 200px">
          <v-text-field
            label="ID Tabela Preço"
            placeholder="Insira o ID"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col md="4"
         style="margin-left: 200px">
          <v-text-field
            label="Categoria"
            placeholder="Ex: conversivel"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="4"
        style="margin-left: 200px">
          <v-text-field
            label="Valor"
            placeholder="Digite o valor"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="4"
        style="margin-left: 200px">
          <v-text-field
            label="Diária"
            placeholder="Digite a diária"
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
            to="/listatabelapreco"
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