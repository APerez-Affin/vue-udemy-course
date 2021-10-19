<template>
  <div>
    <h1>State Component</h1>
    {{ message }}
    <button @click="changeMessage">Change message</button>

    <h3>Quotes list</h3>
    <input type="text" @keyup.enter="handleQuote" placeholder="Add a new quote" v-model.trim="newQuote" />

    <hr />

    <ul>
      <li
        :key="{ index }"
        v-for="({ quote, author }, index) of quotes"
      >
        {{ quote }}
        <blockquote v-show="author">{{ author }}</blockquote>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StateComponent",
  components: {},
  data() {
    return {
      message: "Mensaje de StateComponent",
      newQuote: "",
      quotes: [
        {
          quote:
            "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
          author: "Harvey Dent, The Dark Knight",
        },
        {
          quote: "I believe what doesn’t kill you simply makes you, stranger.",
          author: "The Joker, The Dark Knight",
        },
        {
          quote:
            "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me",
          author: "Henri Ducard, Batman Begins",
        },
        {
          quote:
            "You either die a hero or live long enough to see yourself become the villain.",
          author: "Harvey Dent, The Dark Knight",
        },
        {
          quote: "If you’re good at something, never do it for free.",
          author: "The Joker, The Dark Knight",
        },
        {
          quote: "Yes, father. I shall become a bat.",
          author: "Bruce Wayne/Batman, Batman: Year One",
        },
      ],
    };
  },
  methods: {
    changeMessage() {
      this.message = "Mensaje cambiado";
    },
    handleQuote() {
      this.quotes.unshift({ quote: this.newQuote, author: "Adrian" });
    },
  },
};
</script>
