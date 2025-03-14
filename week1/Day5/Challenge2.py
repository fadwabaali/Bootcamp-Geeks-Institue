from googletrans import Translator

# List of French words
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Initialize the translator
translator = Translator()

# Translate the French words to English
translation_dict = {word: translator.translate(word, src='fr', dest='en').text for word in french_words}

# Print the result
print(translation_dict)
