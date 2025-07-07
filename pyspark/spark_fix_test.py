import os

# ✅ Absolute path to your Anaconda Python executable
os.environ["PYSPARK_PYTHON"] = r"D:\Anaconda\envs\tf-env\python.exe"
os.environ["PYSPARK_DRIVER_PYTHON"] = r"D:\Anaconda\envs\tf-env\python.exe"

from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .appName("FinalFixTest") \
    .config("spark.executor.memory", "1g") \
    .config("spark.driver.memory", "1g") \
    .config("spark.python.worker.memory", "512m") \
    .config("spark.network.timeout", "600s") \
    .config("spark.executor.heartbeatInterval", "60s") \
    .getOrCreate()

data = [(1, "Alice"), (2, "Bob")]
df = spark.createDataFrame(data, ["id", "name"])
df.show()
