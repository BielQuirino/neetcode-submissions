class DynamicArray{
  private arr: number[];
  private capacity: number;
  private size: number;


constructor(capacity: number){
  this.capacity = capacity 
  this.size = 0
  this.arr = new Array(capacity)
} 

get(i: number): number {
  return this.arr[i]
}

set(i: number, n: number):void{
  this.arr[i] = n
}

resize(): void {this.capacity = this.capacity * 2; let arrNew = new Array(this.capacity);
   for(let i = 0; i < this.size; i++){
    arrNew[i] = this.arr[i] 
   }
   this.arr = arrNew
  }

getSize():number{
  return this.size
}

getCapacity(): number{
  return this.capacity
}

popback():number{
  this.size --
  return this.arr[this.size]
}

pushback(n:number):void{
  if(this.size === this.capacity){this.resize()}
  this.arr[this.size] = n
  this.size ++
} 

}