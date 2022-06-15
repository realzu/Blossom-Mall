import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import mypage from '../assets/css/Mypage.module.css'
import MypageTop from './MypageTop';
import MypageInfo from './MypageInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    // border: '1px solid #000',
    width: '1280px',

  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
  },
  contents:{
    fontSize: theme.typography.pxToRem(14),
  }
}));

export default function FAQ() {
  const classes = useStyles();

  return (
    <div className={mypage.container}>
        <div className={mypage.menu}>
            <MypageTop/>
        </div>
        <div className={mypage.my}> 
            <MypageInfo/>
        </div>
        <div className={mypage.orderlist}>
      <div className={classes.root}>
        
          <p className={mypage.tit}>자주 묻는 질문</p>
          <hr/>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>	
  주문 후 입금이 많이 늦었어요.</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
                
  주문 후 2일 이내 미입금 시 가상계좌가 무효 처리되어 입금이 불가합니다. 
  <br/><br/>
  (예시: 5일 주문 후, 7일 23시 59분까지 입금 가능)

  무효 처리 시 다음 날 주문이 자동으로 취소됩니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
  결제한 주문을 취소하고 싶어요</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
            주문취소는 입금확인 단계만 가능합니다. 단, 묶음 상품 중 일부가 배송 준비 중일 경우 1:1문의를 통하여 요청해주시기 바랍니다.
            <br/><br/>
            배송 준비 중부터는 취소가 불가능하며, 수령 후 배송비를 부담하여 환불이 가능합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
  가격이 떨어져 예전에 구매했을 때 보다 싸게 팔고 있는 경우 차액 환불이 되나요?</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
                
  판매 가격의 변동에 따른 차액을 보상해드리지 않습니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
  사진과 제품의 실제 색상이 다른 것 같아요.</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
                
  온라인의 특성상 상품 이미지는 출력되는 모니터 환경에 따라 조금씩 차이가 있을 수 있으며 이는 판매자 사유에 의한 교환 및 환불 대상이 아닙니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
  결제 방법을 변경하고 싶어요.</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
            주문 완료 후 결제 방법 변경은 불가능합니다. 입금 확인 상태에서 취소 후 재주문 해주셔야 합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
    
            가상계좌 주문이 제한 되었어요.</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
              
  가상계좌 주문 후 반복적인 주문취소 시, 가상계좌 주문이 제한됩니다. 다른 결제수단을 이용하시거나 익일 제한이 해제되었을 경우 주문 가능 합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
    
            가상계좌로 주문을 나눠서 했는데 한번에 입금할 수 있나요?</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
            주문번호마다 입금계좌가 다르므로 한번에 입금이 불가합니다. 번거로우시더라도 각각 입금해주셔야 합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
    
            해외 카드로 결제 가능한가요?</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
            대한민국 외에서 발급된 해외 카드(VISA, MasterCard, JCB만 해당)도 결제 가능합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
    
            주문이 자동 취소 되어있어요.</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
              
  가상계좌는 주문 후 2일이내 미입금 시 무효 처리되며, 다음날 주문이 자동으로 취소됩니다.

  취소된 주문은 철회가 불가하며 재주문 해주셔야 합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>	
    
            복합결제가 가능한가요?</Typography>
          </AccordionSummary>
          <hr/>
          <AccordionDetails>
            <Typography className={classes.contents}>
              
  복합결제는 현재 지원하지 않습니다. 구매를 희망하시는 고객님들께서는 한 가지의 결제수단을 이용해 주시기 바랍니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        </div>
      </div>
    </div>
  );
}
