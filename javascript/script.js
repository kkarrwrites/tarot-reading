"use strict";

// Tarot Cards
const tarotCards = [
  {
    src: "resources/the_fool.jpg",
    title: "The Fool",
    description:
      "A young person stands at the edge of a precipice and surveys the world.",
    meaning:
      "Adventure, Beginnings, Exuberance, Idealism, Innocence, Journeys, Naïveté, Opposite of Strength",
  },
  {
    src: "resources/the_magician.jpg",
    title: "The Magician",
    description:
      "A young person in a robe raises a wand in his/her/their right hand toward sky and points his/her/their left hand toward the earth.",
    meaning: "Creation, Knowledge, Mediation, Opposite of The Hierophant",
  },
  {
    src: "resources/the_high_priestess.jpg",
    title: "The High Priestess",
    description:
      "A person with a lunar crescent at his/her/their feet, a horned diadem on his/her/their head, and a large solar cross on his/her/their chest sits on a throne.",
    meaning:
      "Intuition, Mediation, Objectivity, Spirituality, Feminine counterpart to The Hierophant, Opposite of Justice",
  },
  {
    src: "resources/the_empress.jpg",
    title: "The Empress",
    description: "A stately figure wearing a diadem sits on a throne.",
    meaning:
      "Abundance, Fertility, Motherhood, Nature, Nurture, Feminine counterpart to The Emperor",
  },
  {
    src: "resources/the_emperor.jpg",
    title: "The Emperor",
    description: "A stately figure wearing a crown sits on a throne.",
    meaning:
      "Authority, Fatherhood, Leadership, Stoicism, Strength, Masculine counterpart to The Empress",
  },
  {
    src: "resources/the_hierophant.jpg",
    title: "The Hierophant",
    description: "A stately figure sits on a throne.",
    meaning:
      "Beliefs, Conventionality, Education, Religion, Masculine counterpart to The High Priestess, Opposite of The Magician",
  },
  {
    src: "resources/the_lovers.jpg",
    title: "The Lovers",
    description:
      "In the background, the sun shines above a great winged figure with arms extended. In the foreground, two humans, male and female, stand naked.",
    meaning: "Lovers, Partnership, Romance, Relationships, Union",
  },
  {
    src: "resources/the_chariot.jpg",
    title: "The Chariot",
    description: "A figure sits in a chariot.",
    meaning: "Ambition, Control, Determination, Discipline, Success, Willpower",
  },
  {
    src: "resources/strength.jpg",
    title: "Strength",
    description:
      "A person with the symbol for infinity over his/her/their head is closing the jaws of a lion.",
    meaning: "Confidence, Courage, Strength, Opposite of The Fool",
  },
  {
    src: "resources/the_hermit.jpg",
    title: "The Hermit",
    description:
      "A person wearing robes holds a lantern in one hand and a wand in the other.",
    meaning:
      "Contemplation, Solitude, Spiritual Attainment, Wisdom, Withdrawl, Opposite of The Moon",
  },
  {
    src: "resources/wheel_of_fortune.jpg",
    title: "Wheel of Fortune",
    description: "A compass-like wheel surrounded by sphinxes.",
    meaning: "Luck, Fortune, Opposite of The Hanged Man",
  },
  {
    src: "resources/justice.jpg",
    title: "Justice",
    description:
      "A person sitting on a throne holds a sword in one hand and scales in the other hand.",
    meaning: "Cause and Effect, Honesty, Justice, Law, Outcomes, Truth",
  },
  {
    src: "resources/the_hanged_man.jpg",
    title: "The Hanged Man",
    description: "A person hangs upside down from one leg.",
    meaning: "Martarydom, Sacrifice, Opposite of Wheel of Fortune",
  },
  {
    src: "resources/death.jpg",
    title: "Death",
    description: "A skeleton rides a horse.",
    meaning:
      "Beginnings, Change, Endings, Impermanence, Transition, Not a portent of death",
  },
  {
    src: "resources/temperance.jpg",
    title: "Temperance",
    description: "A winged angel stands in a meadow.",
    meaning:
      "Balance, Harmony, Middle Way, Moderation, Restraint, Opposite of The Devil",
  },
  {
    src: "resources/the_devil.jpg",
    title: "The Devil",
    description: "The devil chains two humans by their necks.",
    meaning:
      "Addiction, Excess, Hedonism, Ignorance, Suffering, Opposite of Temperance",
  },
  {
    src: "resources/the_tower.jpg",
    title: "The Tower",
    description:
      "Lightning strikes a tower, taking off the top of the tower and sending people falling.",
    meaning: "Chaos, Destruction, Disaster, Trauma, Turomoil",
  },
  {
    src: "resources/the_star.jpg",
    title: "The Star",
    description:
      "A naked person pours water into a pool with a large star in the background.",
    meaning: "Healing, Rejuvenation, Renewal",
  },
  {
    src: "resources/the_moon.jpg",
    title: "The Moon",
    description: "Two dogs howl at the moon..",
    meaning: "Duality, Intuition, Unconscious, Opposite of The Hermit",
  },
  {
    src: "resources/the_sun.jpg",
    title: "The Sun",
    description: "A naked child rides a horse with the sun in the background.",
    meaning: "Fulfillment, Happiness, Joy, Light, Success, Warmth",
  },
  {
    src: "resources/judgement.jpg",
    title: "Judgement",
    description: "An angel in the sky blows a trumpet.",
    meaning: "Judgement, Reflection",
  },
  {
    src: "resources/the_world.jpg",
    title: "The World",
    description: "A figure floats in the center of a serpent eating its tail.",
    meaning: "Achievement, Completion, Fulfillment, Harmony",
  },
  {
    src: "resources/ace_of_wands.jpg",
    title: "Ace of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Growth, Potential",
  },
  {
    src: "resources/two_of_wands.jpg",
    title: "Two of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Decisions, Planning",
  },
  {
    src: "resources/three_of_wands.jpg",
    title: "Three of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Beginnings, Progress, Ventures",
  },
  {
    src: "resources/four_of_wands.jpg",
    title: "Four of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Abundance, Achievement, Celebration, Home",
  },
  {
    src: "resources/five_of_wands.jpg",
    title: "Five of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Conflict, Disagreements, Discord, Diversity",
  },
  {
    src: "resources/six_of_wands.jpg",
    title: "Six of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Achievement, Confidence, Success, Victory",
  },
  {
    src: "resources/seven_of_wands.jpg",
    title: "Seven of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Challenge, Competition, Defense",
  },
  {
    src: "resources/eight_of_wands.jpg",
    title: "Eight of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Action, Change, Movement, Quick Descisions",
  },
  {
    src: "resources/nine_of_wands.jpg",
    title: "Nine of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Challenges, Courage, Resilience, Weariness",
  },
  {
    src: "resources/ten_of_wands.jpg",
    title: "Ten of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Burdens, Responsibilities, Work",
  },
  {
    src: "resources/page_of_wands.jpg",
    title: "Page of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Discovery, Ideas, Inspiration, Potential",
  },
  {
    src: "resources/knight_of_wands.jpg",
    title: "Knight of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Action, Adventure, Energy, Enthusiasum",
  },
  {
    src: "resources/queen_of_wands.jpg",
    title: "Queen of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Courage, Fertility, Independence, Life",
  },
  {
    src: "resources/king_of_wands.jpg",
    title: "King of Wands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Courage, Leadership, Strength, Vision",
  },
  {
    src: "resources/ace_of_cups.jpg",
    title: "Ace of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Creativity, Emotion, Intuition",
  },
  {
    src: "resources/two_of_cups.jpg",
    title: "Two of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Attraction, Love, Partnership, Romance",
  },
  {
    src: "resources/three_of_cups.jpg",
    title: "Three of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Celebration, Collaboration, Friendship",
  },
  {
    src: "resources/four_of_cups.jpg",
    title: "Four of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Contemplation, Engrossed, Meditation",
  },
  {
    src: "resources/five_of_cups.jpg",
    title: "Five of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Disappointment, Failure, Missed Opportunities, Regret",
  },
  {
    src: "resources/six_of_cups.jpg",
    title: "Six of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Childhood, Innocence, Memories, Nostalgia",
  },
  {
    src: "resources/seven_of_cups.jpg",
    title: "Seven of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Choices, Illusion, Opportunity, Wishful Thinking",
  },
  {
    src: "resources/eight_of_cups.jpg",
    title: "Eight of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Abandonment, Disappointment, Withdrawl",
  },
  {
    src: "resources/nine_of_cups.jpg",
    title: "Nine of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Contentment, Satisfaction",
  },
  {
    src: "resources/ten_of_cups.jpg",
    title: "Ten of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Family, Harmony, Love",
  },
  {
    src: "resources/page_of_cups.jpg",
    title: "Page of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Creativity, Emotions, Inspiration, Intuition",
  },
  {
    src: "resources/knight_of_cups.jpg",
    title: "Knight of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Charisma, Creativity, Imagination",
  },
  {
    src: "resources/queen_of_cups.jpg",
    title: "Queen of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Compassion, Intuition",
  },
  {
    src: "resources/king_of_cups.jpg",
    title: "King of Cups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Balance, Compassion, Diplomacy",
  },
  {
    src: "resources/ace_of_swords.jpg",
    title: "Ace of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Clarity, Triumph",
  },
  {
    src: "resources/two_of_swords.jpg",
    title: "Two of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Decisions, Divergence, Weighing Options",
  },
  {
    src: "resources/three_of_swords.jpg",
    title: "Three of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Grief, Heartbreak, Sorrow",
  },
  {
    src: "resources/four_of_swords.jpg",
    title: "Four of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Meditation, Rest",
  },
  {
    src: "resources/five_of_swords.jpg",
    title: "Five of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Battle, Conflict",
  },
  {
    src: "resources/six_of_swords.jpg",
    title: "Six of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Change, Release, Transition",
  },
  {
    src: "resources/seven_of_swords.jpg",
    title: "Seven of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Betrayal, Deception, Strategy",
  },
  {
    src: "resources/eight_of_swords.jpg",
    title: "Eight of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Imprisonment, Negativity",
  },
  {
    src: "resources/nine_of_swords.jpg",
    title: "Nine of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning:
      "Anxiety, Depression, Fear, Insomnia, Nightmares, Restlessness, Worry",
  },
  {
    src: "resources/ten_of_swords.jpg",
    title: "Ten of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Crisis, Endings, Pain, Suffering, Wounds",
  },
  {
    src: "resources/page_of_swords.jpg",
    title: "Page of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Curiosity, Ideas, Knowledge",
  },
  {
    src: "resources/knight_of_swords.jpg",
    title: "Knight of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Action, Ambition",
  },
  {
    src: "resources/queen_of_swords.jpg",
    title: "Queen of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Direct, Independent",
  },
  {
    src: "resources/king_of_swords.jpg",
    title: "King of Swords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Authority, Intellectual, Truth",
  },
  {
    src: "resources/ace_of_pentacles.jpg",
    title: "Ace of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Opportunity",
  },
  {
    src: "resources/two_of_pentacles.jpg",
    title: "Two of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Adaptability, Balance, Prioritization",
  },
  {
    src: "resources/three_of_pentacles.jpg",
    title: "Three of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Labor, Learning, Teamwork, Work",
  },
  {
    src: "resources/four_of_pentacles.jpg",
    title: "Four of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Control, Scarcity, Security, Thrift",
  },
  {
    src: "resources/five_of_pentacles.jpg",
    title: "Five of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Isolation, Loss, Poverty, Worry",
  },
  {
    src: "resources/six_of_pentacles.jpg",
    title: "Six of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Charity, Generosity, Giving, Receiving",
  },
  {
    src: "resources/seven_of_pentacles.jpg",
    title: "Seven of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Investment, Labor, Planning, Preparation, Work",
  },
  {
    src: "resources/eight_of_pentacles.jpg",
    title: "Eight of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Apprenticeship, Mastery, Labor, Work",
  },
  {
    src: "resources/nine_of_pentacles.jpg",
    title: "Nine of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Abundance, Independence, Luxry",
  },
  {
    src: "resources/ten_of_pentacles.jpg",
    title: "Ten of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Family, Security, Stability, Success, Wealth",
  },
  {
    src: "resources/page_of_pentacles.jpg",
    title: "Page of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Development, Manifestation, Opportunity",
  },
  {
    src: "resources/knight_of_pentacles.jpg",
    title: "Knight of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Labor, Productivity, Routine, Work",
  },
  {
    src: "resources/queen_of_pentacles.jpg",
    title: "Queen of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Labor, Nurturing, Practicality, Work",
  },
  {
    src: "resources/king_of_pentacles.jpg",
    title: "King of Pentacles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meaning: "Discipline, Leadership, Security, Wealth",
  },
];

// Variable Selectors
const beginReadingButton = document.querySelector("#begin-reading-button");
const box2OriginalText = document.querySelector("#box-2-original-text");
const cardImage = document.querySelector("#card-image");
const cardTitle = document.querySelector("#card-title");
const cardMeaning = document.querySelector("#card-meaning");
const selectACardButton = document.querySelector("#select-a-card-button");
const selectAnotherCardButton = document.querySelector(
  "#select-another-card-button"
);

// Select A Card Button
selectACardButton.addEventListener("click", function generateRandomCard(array) {
  box2OriginalText.style.display = "none";
  selectACardButton.style.display = "none";
  let randomNumber = Math.floor(Math.random() * tarotCards.length);
  cardImage.style.display = "inline";
  cardImage.setAttribute("src", tarotCards[randomNumber]["src"]);
  cardImage.setAttribute("alt", tarotCards[randomNumber]["description"]);
  cardTitle.style.display = "block";
  cardTitle.textContent = tarotCards[randomNumber]["title"];
  cardMeaning.style.display = "block";
  cardMeaning.textContent = tarotCards[randomNumber]["meaning"];
  beginReadingButton.style.display = "none";
  selectAnotherCardButton.style.display = "inline";
});

// Select Another Card Button
selectAnotherCardButton.addEventListener("click", () => {
  location.reload();
  history.scrollRestoration = "manual";
});
