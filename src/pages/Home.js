import { useState } from "react"

export default function Home() {
    const [quiz, setQuiz] = useState(0);
    const [lab, setLab] = useState(0);
    const [exam, setExam] = useState(0);

    const [finalGrade, setFinalGrade] = useState(0);
    const [scaledGrade, setScaledGrade] = useState(0);

    const setScores = () => {
        const calcGrade = (quiz * 0.3) + (lab * 0.3) + (exam * 0.4);

        setFinalGrade(calcGrade)

        const scaleReference = {
            74.5: 0,
            76.5: 1,
            78.5: 1.25,
            80.5: 1.5,
            82.5: 1.75,
            84.5: 2,
            86.5: 2.25,
            88.5: 2.5,
            90.5: 2.75,
            92.5: 3,
            94.5: 3.25,
            96.5: 3.5,
            98.5: 3.75,
            100: 4,
        };

        const gradeKeys = Object.keys(scaleReference);
        let scale = 0;

        for (let i = gradeKeys.length - 1; i >= 0; i--) {
            if (calcGrade >= parseFloat(gradeKeys[i])) {
                scale = scaleReference[gradeKeys[i]];
                break;
            }
        }

        setScaledGrade(scale);
    }

    return (
        <div className='flex flex-col space-y-4'>
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold">Hello world!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis diam id sapien pharetra, sed ultricies nisl tincidunt. Etiam lacinia accumsan elit, in malesuada lorem blandit ut. Nunc et condimentum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate diam lacus, iaculis aliquam ex mattis sed. Sed aliquam arcu ut felis fermentum maximus. Nullam porttitor, augue ac vestibulum vestibulum, magna nisi sollicitudin velit, vitae accumsan ante nunc ut risus. Quisque scelerisque congue convallis. Nunc fermentum sit amet nisl sagittis lacinia. Nulla sed lectus tortor. Fusce aliquet nunc ut facilisis scelerisque. Aliquam malesuada lorem et tellus condimentum convallis. Nunc varius euismod tortor in tristique. Quisque id efficitur est.</p>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold">Grade calculator</h1>
                <div className="w-1/3">
                    <div className="flex flex-col w-full space-y-4">
                        <div>
                            <label htmlFor="quizzes" className="block text-sm font-medium leading-6 text-gray-900">Quizzes</label>
                            <input
                                type="number"
                                value={quiz}
                                name="quizzes"
                                id="quizzes"
                                className="p-2 w-full border-2 rounded-lg"
                                onChange={(e) => setQuiz(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="lab" className="block text-sm font-medium leading-6 text-gray-900">Lab Activities</label>
                            <input
                                type="number"
                                value={lab}
                                name="lab"
                                id="lab"
                                className="p-2 w-full border-2 rounded-lg"
                                onChange={(e) => setLab(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="exam" className="block text-sm font-medium leading-6 text-gray-900">Final Exam</label>
                            <input
                                type="number"
                                value={exam}
                                name="exam"
                                id="exam"
                                className="p-2 w-full border-2 rounded-lg"
                                onChange={(e) => setExam(e.target.value)}
                            />
                        </div>
                        <button onClick={setScores} className="flex h-5 p-5 justify-center items-center shadow-md rounded-md text-white font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500">Submit</button>
                        <div className="h-0.5 bg-black opacity-10 rounded-md"></div>
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="text-md font-bold">Grade</td>
                                    <td>{finalGrade}</td>
                                </tr>
                                <tr>
                                    <td className="text-md font-bold">Final Grade</td>
                                    <td>{scaledGrade}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}