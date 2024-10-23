export default function Controls({onPrev, onNext, first, last}) {
    return (
        <div>
            <button disabled={first} onClick={onPrev}>
                Prev
            </button>
            <button disabled={last} onClick={onNext}>
                Next
            </button>
        </div>
    );
}