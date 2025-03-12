class Pagination :
    def __init__(self, items = None, pageSize = 10 ):
        self.items = items
        self.pageSize = int(pageSize)
        self.totalPages = max(1, (len(self.items) + self.pageSize -1))
        self.currentPage = 1
            
    def getVisibleItems(self, list):
        start_index = (self.currentPage - 1) * self.pageSize
        end_index = start_index + self.pageSize
        return self.items[start_index:end_index]
    
    def nextPage (self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self
    
    def previousPage (self):
        if self.currentPage > 1:
            self.currentPage -= 1
        return self
    
    def firstPage (self):
        self.currentPage = 1
        return self
    
    def lastPage (self):
        self.currentPage = self.totalPages
        return self
    
    def goToPage(self, pageNum):
        pageNum = int(pageNum)  # Ensure pageNum is an integer
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = pageNum
        return self
        
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
print(p.getVisibleItems())

p.nextPage()

print(p.getVisibleItems())
# ["e", "f", "g", "h"]

p.lastPage()

print(p.getVisibleItems())
# ["y", "z"]