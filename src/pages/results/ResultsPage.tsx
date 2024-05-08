import './ResultsPage.css';
import { Col, Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { GenerateText, saveGPTReplyBaic, saveGPTReplyDetailed, saveIndustriesBasic, saveIndustriesDetailed, saveOverviewBasic, saveOverviewDetailed, savePieChartValuesBasic, savePieChartValuesDetailed } from './GPT';
import ResultsSection from './components/ResultsSection';
import { ResultsPageProps } from '../../interfaces/ResultsPage';
import LoadingScreen from './components/LoadingScreen';

export function ResultsPage ({ setQuestionsToUse, setSubmitFlagBasic, setSubmitFlagDetailed, questionsToUse, submitFlagBasic, submitFlagDetailed}: ResultsPageProps) {
    const [overviewBasic, setOverviewBasic] = useState<string>(saveOverviewBasic); // Contains the general overview chatGPT returns for the basic questions
    const [industriesBasic, setIndustriesBasic] = useState<string>(saveIndustriesBasic); // Contains the list of industries chatGPT returns for the basic questions
    const [overviewDetailed, setOverviewDetailed] = useState<string>(saveOverviewDetailed); // Contains the general overview chatGPT returns for the detailed questions
    const [industriesDetailed, setIndustriesDetailed] = useState<string>(saveIndustriesDetailed); // Contains the list of industries chatGPT returns for the detailed questions
    const [chatGPTReplyBasic, setChatGPTReplyBasic] = useState<string>(saveGPTReplyBaic); // Contains chatGPTs reply to the users input for basic questions
    const [chatGPTReplyDetailed, setChatGPTReplyDetailed] = useState<string>(saveGPTReplyDetailed); // Contains chatGPTs reply to the users input for detailed questions
    const [pieChartValuesBasic, setPieChartValuesBasic] = useState<string>(savePieChartValuesBasic);
    const [pieChartValuesDetailed, setPieChartValuesDetailed] = useState<string>(savePieChartValuesDetailed);
    
    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setOverviewBasic);
            GenerateText("industry", "basic", "", setIndustriesBasic);
            GenerateText("pie", "basic", "", setPieChartValuesBasic);
            console.log("basic");
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setOverviewDetailed);
            GenerateText("industry", "detailed", "", setIndustriesDetailed);
            GenerateText("pie", "detailed", "", setPieChartValuesDetailed);
            console.log("detailed");
        }
    }, [submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed]);

    function changeQuestionsToUse (event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestionsToUse(event.target.value);
    }

    return(
        <div>
            <div>
                <div style={{border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"}}>
                    <div>
                        <Col className = "textBox">
                            {industriesDetailed && industriesDetailed && overviewBasic && overviewDetailed && 
                            <Form.Select onChange={changeQuestionsToUse} style={{width: "19%", justifyContent: "flex-end", display: "flex"}} defaultValue={questionsToUse} disabled={submitFlagBasic || submitFlagDetailed}>
                                <option value="basic">Basic Questions</option>
                                <option value="detailed">Detailed Questions</option>
                            </Form.Select>}
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && !submitFlagBasic && <ResultsSection setGPTReply={setChatGPTReplyBasic} chatGPTReply={chatGPTReplyBasic} industries={industriesBasic} overview={overviewBasic} pieChartValues={pieChartValuesBasic} questionsToUse={questionsToUse}></ResultsSection>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && !submitFlagDetailed &&<ResultsSection setGPTReply={setChatGPTReplyDetailed} chatGPTReply={chatGPTReplyDetailed} industries={industriesDetailed} overview={overviewDetailed} pieChartValues={pieChartValuesDetailed} questionsToUse={questionsToUse}></ResultsSection>}
                            {submitFlagBasic && questionsToUse === "basic" && submitFlagBasic && <LoadingScreen></LoadingScreen>}
                            {submitFlagDetailed && questionsToUse === "detailed" && <LoadingScreen></LoadingScreen>}
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    );
}