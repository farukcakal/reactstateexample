import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function StateAnasayfa(){
    const [totalPoint, setPoint] = useState(0);
    const [message, setMessage] = useState("Sen yarra yemişsin usta !");

    useEffect(() => {
        if(totalPoint >= 101){
            setMessage("Amına bile koyar kanka !");
        }
        else if(totalPoint > 50){
            setMessage("tırmalıyoruz be kanks");
        }
    }, [totalPoint]);
    
    function handleClick(click) {
        let value = click.target.value;
        setPoint(Number(totalPoint) + Number(value));
    }
    function handleClearClick(){
        setPoint(0);
        setMessage("Sen yarra yemişsin usta !");
    }
    return (
        <div className='text-center mt-5'>
            <Card>
                <Card.Title>
                    <h1>101 Calculator</h1>
                </Card.Title>
                <Card.Body>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3>{totalPoint}</h3>
                            <h1>{message}</h1>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='row mt-3 mb-3'>
                            <div className='col-md-4'>
                                <Button variant="success" value={1} onClick={x => handleClick(x)}>
                                    1
                                </Button>    
                            </div>
                            <div className='col-md-4'>
                                <Button variant="success" value={2} onClick={x => handleClick(x)}>
                                    2
                                </Button>  
                            </div>
                            <div className='col-md-4'>
                                <Button variant="success" value={3} onClick={x => handleClick(x)}>
                                    3
                                </Button> 
                            </div>
                        </div>            
                    </div>    
                    <div className='col-md-3'>
                        <div className='row mt-3 mb-3'>
                            <div className='col-md-4'>
                                <Button variant="success" value={4} onClick={x => handleClick(x)}>
                                    4
                                </Button>    
                            </div>
                            <div className='col-md-4'>
                                <Button variant="success" value={5} onClick={x => handleClick(x)}>
                                    5
                                </Button>  
                            </div>
                            <div className='col-md-4'>
                                <Button variant="success" value={6} onClick={x => handleClick(x)}>
                                    6
                                </Button> 
                            </div>
                        </div>            
                    </div>    
                    <div className='col-md-3'>
                        <div className='row mt-3 mb-3'>
                            <div className='col-md-4'>
                                <Button variant="success" value={7} onClick={x => handleClick(x)}>
                                    7
                                </Button>    
                            </div>
                            <div className='col-md-4'>
                                <Button variant="success" value={8} onClick={x => handleClick(x)}>
                                    8
                                </Button>  
                            </div>
                            <div className='col-md-4'>
                                <Button variant="success" value={9} onClick={x => handleClick(x)}>
                                    9
                                </Button> 
                            </div>
                        </div>            
                    </div>        
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <Button variant="success" value={10} onClick={x => handleClick(x)}>
                                    10
                                </Button>    
                            </div>
                            <div className='col-md-3'>
                                <Button variant="success" value={11} onClick={x => handleClick(x)}>
                                    11
                                </Button>  
                            </div>
                            <div className='col-md-3'>
                                <Button variant="success" value={12} onClick={x => handleClick(x)}>
                                    12
                                </Button> 
                            </div>
                            <div className='col-md-3'>
                                <Button variant="success" value={13} onClick={x => handleClick(x)}>
                                    13
                                </Button> 
                            </div>
                        </div>            
                    </div>    
                    <Button variant="danger" className="w-100 mt-3" onClick={handleClearClick}>
                        Sıfırla
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default StateAnasayfa;