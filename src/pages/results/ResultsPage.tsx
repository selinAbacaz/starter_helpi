import './ResultsPage.css';
import { Col, Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { GenerateText, saveGPTReplyBaic, saveGPTReplyDetailed, saveIndustriesBasic, saveIndustriesDetailed, saveOverviewBasic, saveOverviewDetailed } from './GPT';
import ResultsSection from './components/ResultsSection';
import { ResultsPageProps } from '../../interfaces/ResultsPage';
import ShowPieChart from './components/PieChart';


export function ResultsPage ({ setQuestionsToUse, setSubmitFlagBasic, setSubmitFlagDetailed, questionsToUse, submitFlagBasic, submitFlagDetailed}: ResultsPageProps) {
    const [overviewBasic, setOverviewBasic] = useState<string>(saveOverviewBasic); // Contains the general overview chatGPT returns for the basic questions
    const [industriesBasic, setIndustriesBasic] = useState<string>(saveIndustriesBasic); // Contains the list of industries chatGPT returns for the basic questions
    const [overviewDetailed, setOverviewDetailed] = useState<string>(saveOverviewDetailed); // Contains the general overview chatGPT returns for the detailed questions
    const [industriesDetailed, setIndustriesDetailed] = useState<string>(saveIndustriesDetailed); // Contains the list of industries chatGPT returns for the detailed questions
    const [chatGPTReplyBasic, setChatGPTReplyBasic] = useState<string>(saveGPTReplyBaic); // Contains chatGPTs reply to the users input for basic questions
    const [chatGPTReplyDetailed, setChatGPTReplyDetailed] = useState<string>(saveGPTReplyDetailed); // Contains chatGPTs reply to the users input for detailed questions

    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setOverviewBasic);
            GenerateText("industry", "basic", "", setIndustriesBasic);
            console.log("basic");
            setSubmitFlagBasic(false);
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setOverviewDetailed);
            GenerateText("industry", "detailed", "", setIndustriesDetailed);
            console.log("detailed");
            setSubmitFlagDetailed(false);
        }
    }, [submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed]);

    function changeQuestionsToUse (event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestionsToUse(event.target.value);
    }

    return(
        <div>
            <div>
                <div style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>
                    <div>
                        <Col className = "textBox">
                            <ShowPieChart></ShowPieChart>
                            <Form.Select onChange={changeQuestionsToUse} style={{width: "19%", justifyContent: "flex-end", display: "flex"}} defaultValue={questionsToUse}>
                                <option value="basic">Basic Questions</option>
                                <option value="detailed">Detailed Questions</option>
                            </Form.Select>
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsSection setGPTReply={setChatGPTReplyBasic} chatGPTReply={chatGPTReplyBasic} industries={industriesBasic} overview={overviewBasic} questionsToUse={questionsToUse}></ResultsSection>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsSection setGPTReply={setChatGPTReplyDetailed} chatGPTReply={chatGPTReplyDetailed} industries={industriesDetailed} overview={overviewDetailed} questionsToUse={questionsToUse}></ResultsSection>}
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    );
}