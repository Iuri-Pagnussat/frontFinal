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

      <v-container>
        
      <v-row>
        <v-col>
            <v-btn

            depressed
            elevation="3"
            raised
            color="#81C784"
            style="width: 400px; height: 300px; margin-left: 100px; margin-top: 80px"
             to="/clientes"
          >Clientes</v-btn>
            
            <v-btn
            depressed
            elevation="3"
            raised
            color="#FFE082"
            style="width: 400px; height: 300px; margin-left: 100px; margin-top: 80px"
             to="/endereco"
          >Endereço</v-btn>

           <v-btn
            depressed
            elevation="3"
            raised
            color="#AED581"
            style="width: 400px; height: 300px; margin-left: 100px; margin-top: 80px"
            to="/carro"
          >Carros</v-btn>

            <v-btn
            depressed
            elevation="3"
            raised dense
            color="#DCE775"
            style="width: 400px; height: 300px; margin-left: 100px; margin-top: 80px;"
            to="/tabelapreco"
          >Tabela Preço</v-btn>
            

        </v-col>
      </v-row>
    </v-container>
  

  </v-app>
</template>



<script>

</script>

<style>

</style>

