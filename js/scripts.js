const {createApp} = Vue

const app = createApp({
  data() {
    return {
      todos: [
        {
            action: 'Svegliati alle 8:30',
            done: false
        },
        {
            action: 'Fai colazione',
            done: false
        },
        {
            action: 'Verso le 9:20, accendi il pc per seguire la lezione',
            done: false
        },
        {
            action: 'Ore 11:00, pausa lezione: spuntino e caffè fino alle 11:15',
            done: false
        },
        {
            action: 'Ore 13:00: lezione finita, vai a pranzare',
            done: false
        },
        {
            action: 'Ore 15:00: esercizio Boolean',
            done: false
        },
        {
            action: 'Ore 20:00: palestra',
            done: false
        },
        {
            action: 'Ore 21:00: torno a casa, doccia e cena',
            done: false
        },
        {
            action: 'Ore 22:00: free-time da gestire come preferisco',
            done: false
        },
        {
            action: 'Ore 00:00: dormire',
            done: false
        }
      ]
    }
  }
})

app.mount('#app')