# 机器学习基础

[[toc]]

## 什么是机器学习？

机器学习是人工智能的一个分支，它使计算机能够从数据中学习，而无需显式编程。

## 主要类型

### 1. 监督学习

从标记的训练数据中学习输入到输出的映射关系。

**常见算法：**
- 线性回归
- 逻辑回归
- 决策树
- 随机森林
- 支持向量机 (SVM)

### 2. 无监督学习

从无标签数据中发现隐藏的模式或结构。

**常见算法：**
- K-means 聚类
- 层次聚类
- 主成分分析 (PCA)

### 3. 强化学习

通过与环境交互，学习最大化累积奖励的策略。

**核心概念：**
- 状态 (State)
- 动作 (Action)
- 奖励 (Reward)
- 策略 (Policy)

## 基本流程

```
数据收集 → 数据预处理 → 特征工程 → 模型训练 → 模型评估 → 模型部署
```

## 代码示例

### 线性回归 (Python)

```python
from sklearn.linear_model import LinearRegression
import numpy as np

# 准备数据
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# 训练模型
model = LinearRegression()
model.fit(X, y)

# 预测
print(model.predict([[6]]))  # 输出: [6.]
```

## 参考资料

- [周志华《机器学习》](https://book.douban.com/subject/26708119/)
- [Andrew Ng 机器学习课程](https://www.coursera.org/learn/machine-learning)
- [Scikit-learn 官方文档](https://scikit-learn.org/)
