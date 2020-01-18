const tf=require('@tensorflow/tfjs')


const data=tf.tensor([
[1,2,3],
[4,5,6]
])


const otherData=tf.tensor([
  [7,8,9],
  [10,11,12]
])


// data.add(otherData).print()
// data.sub(otherData).print()
// data.div(otherData).print()
// data.mul(otherData).print()

const x=tf.tensor([1,2,3])
// broadcasting
// x.add(tf.tensor([4])).print()



const a=tf.tensor([
  [1,2],
  [3,4],
  [5,6]
])


const b=tf.tensor([
[1],
[1],
[1]
])

a.add(b).print()


// a.get(2,0)


const data1=tf.tensor([
  [10,20,30],
  [20,30,40],
  [30,40,50],
  [40,50,60],
  [50,60,70],
  [70,80,90]
])

data1.slice([0,1],[data1.shape[0],2]).print()
// -1 means give all records possible in given rows

data1.slice([0,1],[-1,2]).print()

const data2=tf.tensor([
  [10,20,30],
  [20,30,40],
  [30,40,50],
  [40,50,60],
  [50,60,70],
  [70,80,90]
])

data2.sum().print()
data2.sum(1).print()
data2.sum(0).print()
data2.sum(0,true).print()
data2.sum(1,true).concat(data1,1).print()

console.log(data2.sum(1).expandDims(1).shape)
// data1.concat(data2).print()
// data1.concat(data2,0).print()
// data1.concat(data2,1).print()
