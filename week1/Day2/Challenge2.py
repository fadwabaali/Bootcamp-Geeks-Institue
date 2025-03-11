
def decode_matrix (matrix) :
    rows = len(matrix)
    cols = len(matrix[0])
    
    for col in range(cols):
        string = ''
        
        for row in range(rows):
            char = matrix[row][col]
            
            if char.isalpha():
                string += char
            elif string and string[-1].isalpha():
                string += ' '  
        decoded_message += string
    
    return decoded_message.strip() 

matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

decoded_message = decode_matrix(matrix)

print("Decoded Message:", decoded_message)