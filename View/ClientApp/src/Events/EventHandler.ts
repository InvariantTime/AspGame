class EventHandler<T> {

    public Subscribe(): EventHandlerDisposable {
        return new EventHandlerDisposable();
    }
}

class EventHandlerDisposable {

    public Dispose() {

    }
}