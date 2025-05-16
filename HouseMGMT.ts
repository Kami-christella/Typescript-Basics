interface House{
ID: number,
District: string,
Rooms: number,
HouseCategory: HouseCategory
}
enum HouseCategory
{
    RESIDENTIAL = 'R',
    HOTEL = 'H'
}
//  House category(RSIDENTIALS,HOTEL)

interface IHouse{
    addHouse: (house: House) => void,
    removeHouseByDistrict: (District: string) => void,
    removeHouse: (id: number) => void,
    editHouseByDistrict:(id: number,District: string) => void,
     editHouse:(id: number,house: House) => void,
    displayHouses: () => void
}
class HouseManagement implements IHouse{
    public houses: House[] = [];
    constructor() {
    }
    addHouse(house: House){
        const houseExist = this.houses.find((h: House)=>h.ID === house.ID);
        if(houseExist){
            console.log(`House with ID ${house.ID} already exists.`);
            return;
        }
        else if(!houseExist){
            this.houses.push(house);
           console.log(`House added: ID: ${house.ID}, District: ${house.District}, Rooms: ${house.Rooms}, Category: ${house.HouseCategory}`);
        }
    }

    removeHouse(id: number): void{
        const houseIndex = this.houses.findIndex((h: House)=>h.ID === id);
        if(houseIndex === -1){
            console.log(`House with ID ${id} not found.`);
            return;
        }
        else if(houseIndex !== -1){
            this.houses.splice(houseIndex, 1);
            console.log(`House with ID ${id} removed.`);
        }
    }

     removeHouseByDistrict(District: string): void{
        const houseIndex = this.houses.findIndex((h: House)=>h.District === District);
        if(houseIndex === -1){
            console.log(`House with District ${District} not found.`);
            return;
        }
        else if(houseIndex !== -1){
            this.houses.splice(houseIndex, 1);
            console.log(`House in ${District} removed.`);
        }
    }
    editHouse(id: number, house: House): void{
        const houseIndex = this.houses.findIndex((h: House)=>h.ID === id);
        if(houseIndex === -1){
            console.log(`House with ID ${id} not found.`);
            return;
        }
        else if(houseIndex !== -1){
            //this.houses[houseIndex] = house;
             this.houses[houseIndex].District = house.District;
              console.log(`House with ID ${id}  with updated. New  District: ${house.District}`);
            //console.log(`House with ID ${id}  with updated. New deatils: ID: ${house.ID}, District: ${house.District}, Rooms: ${house.Rooms}, Category: ${house.HouseCategory}`);
        }
    }
     editHouseByDistrict(id: number, District: string): void{
        const houseIndex = this.houses.findIndex((h: House)=>h.ID === id);
        if(houseIndex === -1){
            console.log(`House with ID ${id} not found.`);
            return;
        }
        else if(houseIndex !== -1){
            //this.houses[houseIndex] = house;
             this.houses[houseIndex].District = District;
              console.log(`House with ID ${id} updated with New  District: ${District}`);
            //console.log(`House with ID ${id}  with updated. New deatils: ID: ${house.ID}, District: ${house.District}, Rooms: ${house.Rooms}, Category: ${house.HouseCategory}`);
        }
    }
    displayHouses(): void{
        this.houses.map((h: House)=>{
            console.log(`House ID: ${h.ID}, District: ${h.District}, Rooms: ${h.Rooms}, Category: ${h.HouseCategory}`);
        });
    }
}
const houseManagementObj = new HouseManagement();
houseManagementObj.addHouse({ID: 1, District: 'Downtown', Rooms: 3,  HouseCategory: HouseCategory.RESIDENTIAL});
houseManagementObj.addHouse({ID: 2, District: 'CHIC', Rooms: 5,  HouseCategory: HouseCategory.HOTEL});
houseManagementObj.displayHouses();
houseManagementObj.editHouseByDistrict(2, 'Downtown');
//houseManagementObj.editHouse(id:2,  District: 'Downtown');
//houseManagementObj.editHouse(2,{ID: 2, District: 'Downtown', Rooms: 4,  HouseCategory: HouseCategory.RESIDENTIAL});
// houseManagementObj.removeHouse(2);
// houseManagementObj.removeHouseByDistrict('Downtown');


