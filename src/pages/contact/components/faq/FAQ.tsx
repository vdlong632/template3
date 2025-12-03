import { useState } from "react";

const data = [
    {
        question: "Question 1",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas."
    },
    {
        question: "Question 2",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas."
    },
    {
        question: "Question 3",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas."
    },
    {
        question: "Question 4",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas."
    },
    {
        question: "Question 5",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas."
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq">
            <h1>FAQ</h1>
            <div className="faq__list">
                {data.map((item, index: number) => (
                    <div className="faq__item" key={index}>
                        <div
                            className="faq__question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{item.question}</span>

                            <button className="faq__icon">
                                {activeIndex === index ? "−" : "+"}
                            </button>
                        </div>

                        <div className={`faq__answer ${activeIndex === index ? "show" : ""}`}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
