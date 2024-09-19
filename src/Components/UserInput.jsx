export default function UserInput({ onChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        name="initialInvestiment"
                        value={userInput.initialInvestiment}
                        onChange={onChange}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        name="annualInvestment"
                        value={userInput.annualInvestment}
                        onChange={onChange}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        name="expectedReturn"
                        value={userInput.expectedReturn}
                        onChange={onChange}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        name="duration"
                        value={userInput.duration}
                        onChange={onChange}
                    />
                </p>
            </div>
        </section>
    );
}