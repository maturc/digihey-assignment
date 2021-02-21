export class VehicleTree {
  root: Node;
  constructor() {
    this.root = new Node("root");
  }
  addFromArray(data: Array<IVehicleType>) {
    data.forEach( this.handleData.bind(this) );
  }
  //could use some refactoring to make it more readable
  //attach new node, change target to the attached node and repeat for all data
  private handleData( {group, type, model}: IVehicleType) {
    let targetNode = this.root;

    targetNode = this.findAndAddDescendant(targetNode, group);
    targetNode = this.findAndAddDescendant(targetNode, type);
    this.findAndAddDescendant(targetNode, model);
  }
  private findAndAddDescendant(targetNode: Node, targetValue: string) {
    targetNode.addDescendant( new Node(targetValue) );
    return targetNode.findDescendant(targetValue) as Node;
  }
}

export class Node {
  value: string;
  descendants: Array<Node>;
  constructor(value: string) {
    this.value = value;
    this.descendants = [];
  }
  addDescendant(node: Node) {
    if( this.descendants.some( (descendant) => descendant.value === node.value )) {
      return;
    }
    this.descendants.push(node);
  }
  findDescendant(targetValue: string) {
    for(let i=0; i<this.descendants.length; i++) {
      if( this.descendants[i].value === targetValue ) {
        return this.descendants[i]
      }
    }
  }
}