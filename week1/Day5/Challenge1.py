# Challenge 1 : Sorting

def sortStr(string):
    return ",".join(sorted(string.split(",")))
    

string = input("Enter a list of strings to sort\n")

print("Sorted list:", sortStr(string))


# Challenge 2 : Longest Word

def longestWord(string):
    words = string.split()
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

string = input("Enter a sentence to find the longest word\n")

print("Longest word:", longestWord(string))