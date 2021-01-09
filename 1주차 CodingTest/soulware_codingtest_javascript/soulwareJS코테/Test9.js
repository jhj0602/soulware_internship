class Queue{
    constructor(){
      this.dataStore= [];
    }
    toString(){
      let result = "";
      for(val of this.dataStore){
        result = result + val + "\n";
      }
      return result;
    }
    enqueue(element){
      this.dataStore.push(element);
    }
    dequeue(){
      return this.dataStore.shift();
    }
    front(){
      return this.dataStore[0];
    }
    back(){
      return this.dataStore[this.dataStore.length-1];
    }
    empty(){
      if(this.dataStore.length == 0){
        return true;
      }
      else{
        return false;
      }
    }
  }
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  console.log(q.toString());//1,2,3,4
  q.dequeue();//1
  q.dequeue();//2
  console.log(q.toString());//3,4
  
  
