const tf=require('@tensorflow/tfjs')


const data=tf.tensor([
[1,2,3],
[4,5,6]
])


const otherData=tf.tensor([
  [7,8,9],
  [10,11,12]
])

data.add(otherData).print()
data.sub(otherData).print()
data.div(otherData).print()
data.mul(otherData).print()
