import random

class Gene:
    def __init__(self):
        self.value = random.choice([0,1])
    def mutate(self):
        self.value = 1 - self.value 
        
class Chromosome :
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]
        
    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5: # generates random num 0.0 - 1.0
                gene.mutate()
                
    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes) 
    
class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)] 
        
    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()
    
    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)
    
class Organism:
    def __init__(self, mutation_rate):
        self.dna = DNA()
        self.mutation_rate = mutation_rate
        while self.is_all_ones():
            self.dna = DNA()
        
    def mutate(self):
        if random.random() < self.mutation_rate:
            self.dna.mutate()       
    
    def is_all_ones(self):
        return self.dna.is_all_ones()
    
def evolve():
    generations = 0
    organism = Organism(mutation_rate=0.9)
    print("Starting DNA:")
    for i, chromosome in enumerate(organism.dna.chromosomes):
        print(f"Chromosome {i+1}: {[gene.value for gene in chromosome.genes]}")
    while not organism.is_all_ones(): 
        organism.mutate()
        generations += 1

    print(f"It took {generations} generations to reach full mutation.")

evolve()