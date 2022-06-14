package com.spring.boot.util;

import org.springframework.stereotype.Component;

@Component("myUtil")
public class MyUtil { //����¡�ϴ� Class

	//��ü������
	public int getPageCount(int numPerPage, int dataCount) {

		int pageCount = 0;

		pageCount = dataCount / numPerPage; // 34�� / 3��(�������� �����ٰ���)

		if(dataCount % numPerPage != 0) {
			pageCount++;
		}

		return pageCount;

	}

	//������ ó�� �޼ҵ�
	public String pageIndexList(int currentPage, int totalPage, String listUrl) {

		int numPerBlock = 5 ; //������ ������ ���� ex)������ 6 7 8 9 10 ������
		int currentPageSetup; // �ﰢ���� �������ִ°� ��
		int page; //6 7 8 9 10

		StringBuffer sb = new StringBuffer();

		if(currentPage==0 || totalPage==0) {
			return "";
		}

		//list.jsp   ���ϰ� : ?pageNum=2 : �˻� ��������
		//list.jsp?searchKey=subject&searchValue=aa ���ϰ� :&pageNum=2 : �˻� ���� ��
		if(listUrl.indexOf("?")!=-1) { //?�� �ִٸ�
			listUrl = listUrl + "&";
		}
		else {
			listUrl = listUrl + "?";
		}

		//������ 6 7 8 9 10 ������
		//������ư : currentPageSetup
		currentPageSetup = (currentPage/numPerBlock)*numPerBlock;

		if(currentPage % numPerBlock == 0 ) {
			currentPageSetup = currentPageSetup - numPerBlock;
		}

		//������
		if(totalPage > numPerBlock && currentPageSetup > 0) {

			sb.append("<a href=\"" + listUrl + "pageNum=" + currentPageSetup + "\">◀이전&nbsp;</a>"); //"�� ������ "�� ���� \"�� "�� �ȿ� ���ڷ��ν�

			//<a href="list.jsp?pageNum=5>������</a>

		}

		//�ٷΰ���������(6 7 8 9 10)

		page = currentPageSetup + 1 ;

		while(page <= totalPage && page <= (currentPageSetup + numPerBlock)) {

			if(page == currentPage) {
				sb.append("<font color =\"Fuchsia\">" + page + "&nbsp;</font>");
				//<font color="Fuchsia">9</font>&nbsp;
			}

			else {
				sb.append("<a href=\""+ listUrl + "pageNum=" + page + "\">" + page + "&nbsp;</a>");
				//<a href="list.jsp?pageNum=7">7</a>&nbsp;
			}

			page++;

		}

		//������
		if(totalPage - currentPageSetup > numPerBlock) {

			sb.append("<a href=\"" + listUrl + "pageNum=" + page + "\">다음▶</a>");
			//<a href="list.jsp?pageNum=11">������</a>&nbsp;
		}
		
		return sb.toString();

	}


}
