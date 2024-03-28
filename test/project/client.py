# 1
import paho.mqtt.client as mqtt
# 2
mqttBroker = "test.mosquitto.org"

class TemperatureServiceClient:
    def __init__(self):
      # 3 
        self.client = mqtt.Client()
      # 4
        self.client.connect(mqttBroker)


    def sendTemperatureChange(self, id):
      # 5
        topic = "temperature/changed"
      # 6 
        self.client.publish(topic, id)