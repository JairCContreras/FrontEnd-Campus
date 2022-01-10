import java.util.*;
interface IObservable {
    void add(IObserver observer);
    void remove(IObserver observer);
    void alert();
}

class WeatherStation implements IObservable{
    List<IObserver> observers = new ArrayList<IObserver>();
    int temperature;
    @Override
    public void add(IObserver observer){
        observers.add(observer);
    }

    @Override
    public void remove(IObserver observer){
       int index = observers.indexOf(observer);
       if(index < 0) {
           observers.remove(index);
       }
    }

    @Override
    public void alert(){
        for(IObserver observer : this.observers){
            observer.update();
        }
    }

    public int getTemperature(){
        return 10;
    }
}