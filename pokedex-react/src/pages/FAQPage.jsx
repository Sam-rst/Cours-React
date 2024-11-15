import Footer from "../components/Footer"
import Header from "../components/Header"
import { useState } from "react";

export default function FAQPage() {

    const questions = {
        question_1: {
            question: "What is the best thing of the world ?",
            response: "Me."
        },
        question_2: {
            question: "How old are u beautiful thing ?",
            response: "142 years and u ?"
        },
        question_3: {
            question: "What is the best game ever ?",
            response: "Of course pong !"
        },
    }

    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [showResponse, setShowResponse] = useState(false);

    const handleRandomQuestion = () => {
        const questionKeys = Object.keys(questions);
        const randomKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];
        setSelectedQuestion(questions[randomKey]);
        setShowResponse(false);
    }

    return (
        <>
            <Header />
            <h1>FAQ</h1>
            <br /><br />
            <button onClick={handleRandomQuestion}>Afficher une question aléatoire</button>
            <br /><br />
            {selectedQuestion && (
                <>
                    <h2>{selectedQuestion.question}<button onClick={() => setShowResponse(true)}>Afficher la réponse</button></h2>
                    {showResponse && <p>{selectedQuestion.response}</p>}
                </>
            )}
            <br /><br />
            <Footer />
        </>
    )
}