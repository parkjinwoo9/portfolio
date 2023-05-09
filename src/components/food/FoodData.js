import BBYUDAE from './foodImages/BBYUDAE.jpeg';
import BBYUDAEDETAIL1 from './foodImages/BBYUDAEDETAIL1.jpeg'
import BBYUDAEDETAIL2 from './foodImages/BBYUDAEDETAIL2.jpeg'
import BBYUDAEDETAIL3 from './foodImages/BBYUDAEDETAIL3.jpeg'
//-------------------------------------------------------------
import jooktongsam from './foodImages/jooktongsam.jpeg';
import jooktongsam1 from './foodImages/jooktongsam1.jpeg';
import jooktongsam2 from './foodImages/jooktongsam2.jpeg';
import jooktongsam3 from './foodImages/jooktongsam3.jpeg';
//-------------------------------------------------------------
import joonghwa from './foodImages/joonghwa.jpeg'
import joonghwa1 from './foodImages/joonghwa1.jpeg'
import joonghwa2 from './foodImages/joonghwa2.jpeg'
import joonghwa3 from './foodImages/joonghwa3.jpeg'
//---------------------------------------------------------------
import jomil from './foodImages/jomil.jpeg';
import jomil1 from './foodImages/jomil1.jpeg';
import jomil2 from './foodImages/jomil2.jpeg';
import jomil3 from './foodImages/jomil3.jpeg';
//-------------------------------------------------------------
import ryusen from './foodImages/ryusen.jpeg'
import ryusen1 from './foodImages/ryusen1.jpeg'
import ryusen2 from './foodImages/ryusen2.jpeg'
import ryusen3 from './foodImages/ryusen3.jpeg'
//---------------------------------------------------
import gogae from './foodImages/gogae.jpeg';
import gogae1 from './foodImages/gogae1.jpeg';
import gogae2 from './foodImages/gogae2.jpeg';
import gogae3 from './foodImages/gogae3.jpeg';
//----------------------------------------------------
import house from './foodImages/house.jpeg';
import house1 from './foodImages/house1.jpeg';
import house2 from './foodImages/house2.jpeg';
import house3 from './foodImages/house3.jpeg';
//------------------------------------------------
import vasco from './foodImages/vasco.jpeg';
import vasco1 from './foodImages/vasco1.jpeg';
import vasco2 from './foodImages/vasco2.jpeg';
import vasco3 from './foodImages/vasco3.jpeg';
//---------------------------------------------------
import not from '../../images/not.png'


const FoodData = [
    {
        id:0,
        img:<img src={BBYUDAE} alt='뼈대'/>,
        detailImg1:<img src={BBYUDAEDETAIL1} alt='뼈대'/>,
        detailImg2:<img src={BBYUDAEDETAIL2} alt='뼈대'/>,
        detailImg3:<img src={BBYUDAEDETAIL3} alt='뼈대'/>,
        name:"뼈대있는 집",
        place:"주소  대구 달서구 달구벌대로251안길 29", 
        score:"10", 
        review:"세계 3대 고급육인 듀록품종에서 탄생한 지리산 명품 생돼지고기를 15일 이상 숙성하여, 3 cm 두께의 두툼한 고기를 참숯직화구이로 직접 구워 드리는 지역 최고의 고기 맛집입니다."
    },
    {
        id:1,
        img:<img src={jooktongsam} alt='죽통삼'/>,
        detailImg1:<img src={jooktongsam1} alt='죽통삼'/>,
        detailImg2:<img src={jooktongsam2} alt='죽통삼'/>,
        detailImg3:<img src={jooktongsam3} alt='죽통삼'/>,
        name:"죽통삼", place:"대구 달서구 월배로40길 85 1층 죽통삼", 
        score:"10", 
        review:"국내산 한돈 무항생제를 쓰는 대나무통 숙성 전문점입니다. 대나무통 숙성구이 및 요즘 핫한 토마호크, 우대갈비, 황제갈비살, 돈마호크 메뉴도 다양합니다."
    },
    {
        id:2,
        img:<img src={joonghwa} alt='중화당'/>, 
        detailImg1:<img src={joonghwa1} alt='중화당'/>,
        detailImg2:<img src={joonghwa2} alt='중화당'/>,
        detailImg3:<img src={joonghwa3} alt='중화당'/>,
        name:"중화당", 
        place:"대구 달서구 선원로 113", 
        score:"10", 
        review:"괜찮은 가성비의 집 지금껏 먹엇던 중국집 중 제일 괜찮았던 곳, "
    },
    {
        id:3,
        img:<img src={jomil} alt='조밀'/>,
        detailImg1:<img src={jomil1} alt='조밀'/>,
        detailImg2:<img src={jomil2} alt='조밀'/>,
        detailImg3:<img src={jomil3} alt='조밀'/>,
        name:"조밀", 
        place:"대구 중구 달구벌대로 2115-2 1층 조밀", 
        score:"10", 
        review:"대구 중구 핫플인 폭포수처럼 흘러내리는 감자치즈의 조합 스테이크맛집 & 마늘쫑오일 파스타맛집 오픈 전인데도 대기줄이 길고 파스타가 고소하면서 은은하게 마늘향이나서 독특합니다"
    },
    {
        id:4,
        img:<img src={ryusen} alt='류센소'/>,
        detailImg1:<img src={ryusen1} alt='류센소'/>,
        detailImg2:<img src={ryusen2} alt='류센소'/>,
        detailImg3:<img src={ryusen3} alt='류센소'/>,
        name:"류센소", 
        place:"대구 중구 공평로 57 1층 류센소", 
        score:"10", 
        review:"돈사골을 장시간 우려내어 진하고 크리미한 맛이 특징입니다. 해장에 적합한 얼큰함과 매운맛이 매력인 류센소 카라 바지락육수로 시원하면서 깔끔한 삿포로스타일 아사리 카키라멘은 10월부터 3월까지 계절메뉴이며,굴라멘으로 많은 인기를 얻고있는 메뉴입니다."
    },
    {
        id:5,
        img:<img src={gogae} alt='해운대 스무고개'/>,
        detailImg1:<img src={gogae1} alt='스무고개'/>,
        detailImg2:<img src={gogae2} alt='스무고개'/>,
        detailImg3:<img src={gogae3} alt='스무고개'/>,
        name:"스무고개", 
        place:"부산 해운대구 좌동순환로468번가길 81 1층, 2층", 
        score:"10", 
        review:"(저희 스무고개는 1++ 한우 를 판매하는 한우 식육식당 입니다. 해운대에 위치하고 있으며 1++ 한우를 1만원대에 가성비 있게 판매하고 있습니다.항상 매장을 찾아주시는 분들께 최상의 서비스를 제공 하도록 노력 하며 , 해운대맛집 고깃집이 되도록 노력하는 스무고개가 되겠습니다"
    },
    {
        id:6,
        img:<img src={house} alt='오디너리 하우스'/>,
        detailImg1:<img src={house1} alt='스무고개'/>,
        detailImg2:<img src={house2} alt='스무고개'/>,
        detailImg3:<img src={house3} alt='스무고개'/>, 
        name:"오디너리 하우스", 
        place:"대구 중구 동성로2길 21-8", 
        score:"10", 
        review:"카페 분위기에 어울리는다양한 디저트와 맛있는 커피가있어 동성로에서 핫플로 유명한 곳평일에 방문하거나,주말에 일찍 방문하면자리가 있을 수 있지만그것이 아니면 웨이팅은 불가피!보기 좋은 것이 먹기도 좋다고디저트가 맛있었지만, 개인적으로커피가 디저트 보다 좋았다디저트도 맛있었지만,조금 딱딱하고 퍽퍽한 느낌!따뜻하게 데워주면 완벽할 듯!카페에 웨이팅 시스템이 따로 없어웨이팅 손님들끼리 눈치 싸움을 하다잘못해서 찐싸움으로 번지진 않을까?라는 생각을 웨이팅 하면서 느꼈다처음에는 웨이팅 시스템이 있었지만,카페 입장에서 다양한 경험의 이유로어렵다고 생각해 없어진 것!힘들게 한 번 방문해도 후회없을 카페!"
    },
    {
        id:7,
        img:<img src={vasco} alt='바스코'/>,
        detailImg1:<img src={vasco1} alt='바스코'/>,
        detailImg2:<img src={vasco2} alt='바스코'/>,
        detailImg3:<img src={vasco3} alt='바스코'/>, 
        name:"바스코", 
        place:"대구 중구 동성로4길 100 vasco", 
        score:"10", 
        review:"누구나 맛있게 즐길수 있는 퓨전 멕시코요리!신선한 재료와 홈메이드 방식으로 만들어지는 제대로 된 멕시코요리!타코, 부리또, 퀘사디아, 치미창가 등 다양한 요리를 만날 수 있는 곳!" 
    },
    {
        id:8,
        img:<img src={not} alt='/'/>, 
        name:"준비중입니다.", place:"준비중입니다", 
        score:"준비중입니다", 
        review:"준비중입니다"
    },
    
]


export default FoodData;