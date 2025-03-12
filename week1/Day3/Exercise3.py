# Exercise 1 : Call History

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
        
    def call (self, other_phone):
        callrecord = f"Phone {self.phone_number} called phone {other_phone.phone_number}"
        print(callrecord)
        self.call_history.append(callrecord)
        
    def show_call_history(self):
        print("Call History:")
        for call in self.call_history:
            print("call history", call)
    
    def send_message(self,other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}: {content}")
    
    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(f"to {message['to']}: {message['content']}")
    
    def show_incoming_messages(self):
        print("Incoming Messages:")
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(f"from {message['from']}: {message['content']}")
    
    def show_messages_from(self, specific_number):
        print(f"Messages from {specific_number}:")
        for message in self.messages:
            if message["from"] == specific_number:
                print(f"To: {message['to']} | Content: {message['content']}")
    
      
phone1 = Phone("0000000000")
phone2 = Phone("0606060606")

phone1.call(phone2)
print(phone1.call_history)

phone2.call(phone1)
print(phone2.call_history)

phone1.show_call_history()
phone2.show_call_history()

phone1.send_message(phone2, "Hello, how are you?")
phone2.send_message(phone1, "I'm good, thanks!")

phone1.show_outgoing_messages()
phone2.show_outgoing_messages()

phone1.show_incoming_messages()
phone2.show_incoming_messages()

phone1.show_messages_from("0606060606")