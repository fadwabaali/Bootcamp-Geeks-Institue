
word = input ("Enter word")

def create_letter(word):
    letter_dict = {}
    
    for index, letter in enumerate(word):
        if letter in letter_dict:
            letter_dict[letter].append(index)
        else:
            letter_dict[letter] = [index]
    
    return letter_dict

print(create_letter(word))