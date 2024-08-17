import OG_First from "@/public/images/og/1st_og.png";

export const Events = [
  {
    href: "https://www.meetup.com/datadog-korea-user-group/events/302769274/?eventOrigin=group_upcoming_events",
    title: "DatadogKRUG 1회 밋업",
    description: `2024.08.30 (금) 19:00~21:00\n서울 용산구 한강대로 372, KDB타워 24층 트렌드룸 (올리브영 본사)`,
    thumbnail: OG_First,
    images: [],
    stack: ["Datadog", "Dashboards", "Monitoring"],
    slug: "1",
    content: (
      <div id='event-details' className='px-6 sm:px-4 xl:px-0 md:max-w-screen mt-5 w-full '>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>세부 정보</h2>
        </div>
        <div className='break-words'>
          <p className='mb-4'>
            <strong>■ 모임 소개</strong>
            <br />
            DatadogKRUG (Datadog Korea User Group)은 Monitoring, Observability와 관련된 모든 주제에 대해서 지식을
            교류하며 함께 성장하는 모임입니다.
            <br />
            Datadog뿐만 아니라 Datadog에서 사용할 수 있는 수많은 Integrations 들에 대한 내용도 공유할 수 있습니다.
            <br />
            누구나 참여해서 즐겁게 즐길 수 있는 분위기, 토론 및 질의응답, 네트워킹 하는 것을 지향합니다.
          </p>
          <p className='mb-4'>
            ■ 일시 및 장소
            <br />
            일시 : 2024.08.30 (금) 19:00~21:00
            <br />
            장소 : 서울 용산구 한강대로 372, KDB타워 24층 트렌드룸 (올리브영 본사)
            <br />
            출입방법 :{" "}
            <strong>
              행사장 입장을 위해서는 KDB타워 지하 1층에 있는 로비의 안내데스크에서 행사명과 참석자 본인 이름을 확인시켜
              주시면 됩니다.
            </strong>
          </p>
          <p className='mb-4'>
            <strong>■ 모임주제</strong>
          </p>
          <ul className='pl-5 list-disc mb-4'>
            <li>
              발표자: <strong>최삼열님</strong> (SRE 엔지니어, : CJ 올리브영 테크플랫폼센터 플랫폼엔지니어링팀)
            </li>
            <li>
              주제: <strong>대규모 이벤트와 함께 진화한 올리브영의 대시보드 변천사</strong>
            </li>
          </ul>
          <p className='mb-4'>
            올리브영은 데이터독 기반 모니터링 체계를 구축하여 올영세일과 같은 대규모 온라인몰 이벤트 운영 시 시스템
            안정성을 강화하고, 서비스 성능을 극대화했습니다. 이에 본 세션에서는 올리브영 SRE 엔지니어가 사용자 경험
            개선에 직접적 영향을 미친 대시보드 진화 과정을 소개하고, 개발팀을 위한 데이터독 활용 노하우를 추가로
            공유합니다.
          </p>
          <p className='mb-4'>■ 진행 순서</p>
          <ol className='pl-5 list-decimal mb-4'>
            <li>모임소개</li>
            <li>본 발표</li>
            <li>Q&amp;A</li>
            <li>라이트닝 토크 &amp; 일정 종료</li>
          </ol>
          <p className='mb-4'>■ 참가 안내</p>
          <ul className='pl-5 list-disc mb-4'>
            <li>
              참가비는 <strong>10,000원</strong>이며 [토스뱅크 윤창현 1001-4417-6252]에 입금하여 주시길 바랍니다.
            </li>
            <li>참가비는 간단한 식사 제공 및 DatadogKRUG 운영에 사용됩니다.</li>
            <li>참가신청 후 모임 운영진이 입금내역 확인 하여 "불참"으로 이동될 수 있습니다.</li>
            <li>참가비 지불이 확인되면 참가자 목록에서 "참석"으로 이동되고 "지불 완료" 상태로 변경해 드립니다.</li>
            <li>
              참가비 확인은 밋업 시스템이 아닌 모임 운영진이 직접 내역 확인 및 상태 변경을 하고 있는 점 참고
              부탁드립니다
            </li>
            <li>참가 확정 인원은 Meetup에서 참가 신청 하신 분들 중에서 참가비 입금 순으로 결정합니다.</li>
          </ul>
          <p className='mb-4'>■ 참가비 환불 안내</p>
          <ul className='pl-5 list-disc mb-4'>
            <li>환불가능 시간은 08월 25일 오후 11시 59분까지입니다</li>
            <li>환불가능 시간 이후에는 식사 및 출입준비 절차 완료로 인해 환불이 어렵습니다.</li>
            <li>환불 문의는 아래 링크에서 폼을 입력해 주시면 안내해 드리겠습니다.</li>
            <li>
              <a href='https://tally.so/r/mBZ155' target='_blank' className='!text-viridian' rel='nofollow ugc'>
                환불신청
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
