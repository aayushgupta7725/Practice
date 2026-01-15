class Table:
    def __init__(self,colour,height,area):
        self.colour=colour
        self.height=height
        self.area=area
    
    def decorator(use):
        def wrapper(self):
            print("The size of table is: ")
            use(self)
            print("Bye")
        return wrapper
    
    @decorator
    def use(self):
        if 900<self.area<4500:
            print("Small")
        else:
            print("Large")

    def __str__(self):
        return "It is a table"
    
    @property
    def area(self):
        return self._area
    
    @area.setter
    def area(self,area):
        if not 900<area<4900:
            raise ValueError("The area of table is either less or greater than defined range")
        self._area=area
    
    
def main():
    round_table=Table("brown", 12.2, 2500)
    round_table.use()

if __name__=="__main__":
    main()