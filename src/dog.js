// @flow

class Dog {
  name: string

//  constructor(name: string) {
  constructor(name: number) {
    this.name = name
  }

  bark() {
    return `Wah wah, I am ${this.name}`
  }
}

export default Dog
