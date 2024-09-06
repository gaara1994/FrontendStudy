//定义一个接口，用来限制person对象的具体属性
export interface Person {
    id: number,
    name: string,
    age?: number, //定义一个可选属性
}

//自定义类型
export type PersonList = Person[]