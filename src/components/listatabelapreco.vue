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
          <span class="text-h5 white--text">Listagem Tabela de preços</span>
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
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
          {
            name: 'Cereal',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>
  <!-- DADOS --> 


<style>

</style>