import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11,GPIO.OUT)
pwm = GPIO.PWM(11,50)
pwm.start(5)
while(1):
    dutyCycleInput=input("What DC")
    pwm.ChangeDutyCycle(dutyCycleInput)
# p.ChangeFrequency(freq)
# p.ChangeDutyCycle(dc)
# p.stop()