interface IObserver {
    void update();
}

class PhoneDisplay implements IObserver {
    WeatherStation station;
    int temperature;
    PhoneDisplay(WeatherStation station){
        this.station = station;
    }
    @Override
    public void update(){
        this.tempature = this.station.getTemperature();
    }


}