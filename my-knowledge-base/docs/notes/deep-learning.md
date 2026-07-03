# 深度学习入门

[[toc]]

## 什么是深度学习？

深度学习是机器学习的一个子领域，使用多层神经网络来学习数据的层次化表示。

## 神经网络基础

### 感知机

最简单的神经网络单元：

$$
y = f(\sum_{i=1}^{n} w_i x_i + b)
$$

其中：
- $x_i$ 是输入
- $w_i$ 是权重
- $b$ 是偏置
- $f$ 是激活函数

### 激活函数

| 函数 | 公式 | 特点 |
|------|------|------|
| Sigmoid | $\sigma(x) = \frac{1}{1+e^{-x}}$ | 输出范围 (0,1) |
| Tanh | $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$ | 输出范围 (-1,1) |
| ReLU | $f(x) = \max(0, x)$ | 计算简单，常用 |

## 常见架构

### 1. 全连接网络 (FCN)

每一层的每个神经元都与上一层的所有神经元相连。

### 2. 卷积神经网络 (CNN)

专门用于处理网格状数据（如图像）。

**主要层：**
- 卷积层 (Convolutional Layer)
- 池化层 (Pooling Layer)
- 全连接层 (Fully Connected Layer)

### 3. 循环神经网络 (RNN)

处理序列数据，具有记忆功能。

**变体：**
- LSTM (长短期记忆)
- GRU (门控循环单元)

## 代码示例

### PyTorch 简单示例

```python
import torch
import torch.nn as nn

# 定义一个简单的神经网络
class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 10)
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# 创建模型
model = SimpleNet()
print(model)
```

## 学习资源

- [深度学习花书](https://book.douban.com/subject/27087503/)
- [PyTorch 官方教程](https://pytorch.org/tutorials/)
- [TensorFlow 官方教程](https://www.tensorflow.org/tutorials)
- [李宏毅深度学习课程](https://www.bilibili.com/video/BV1Wv411h7kN)
