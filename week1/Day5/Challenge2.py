from deep_translator import GoogleTranslator

# List of French words
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Translate the French words to English
translation_dict = {word: GoogleTranslator(source='fr', target='en').translate(word) for word in french_words}

# Print the result
print(translation_dict)
