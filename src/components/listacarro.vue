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

  <!-- LISTAGEM --> 
    <v-container style="margin-top: 130px">
<div>
        <v-card-title class="cyan darken-1">
          <span class="text-h5 white--text">Listagem de Veiculos</span>
          <v-spacer></v-spacer>
        </v-card-title>
   <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>

</div>
            
    </v-container>
  <!-- LISTAGEM --> 

  </v-app>
</template>

  <!-- DADOS --> 
<script>
import { mapActions, mapGetters } from "vuex"

  export default {
methods: {
  ...mapActions("carro", ["setCarro"]),
} 
    }
</script>
  <!-- DADOS --> 


<style>

</style>