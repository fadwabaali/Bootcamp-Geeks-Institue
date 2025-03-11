# Exercise 2 : Longest word without a specific character
def longest_sentence_without_a():
    longest_sentence = ""

    while True:
        sentence = input("Enter the longest sentence you can without the letter 'A': ").strip()

        if 'a' in sentence.lower():
            print("Oops! Your sentence contains the letter 'A'. Try again.")
            continue

        if len(sentence) > len(longest_sentence):
            longest_sentence = sentence
            print(f"Congratulations! You've set a new record with {len(longest_sentence)} characters.")

longest_sentence_without_a()
