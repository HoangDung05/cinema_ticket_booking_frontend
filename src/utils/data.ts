export const cinemas = [
  { id: 'LC-001', name: 'Lumière Central', location: '7th Avenue, Manhattan', halls: 12, capacity: 2400, status: 'Operational', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA65FyiZU7Cq4weEKq2YVd5OA6eoLqf9h5tH0V2oHBF6DIXqapHj_WuzmECWk0qJzlnAp3kEgGp_FQGApMpnBtgX43v6rfMZU0mb9DimUoseGo9J-e8Kg9IbnN28RtwqcQfnXU_UrYHkOfOqUI4d3szeQjeQZxyeo2SOvfHuKm_hjetLbgB0lcS_rOPxphtqa-odOijX-w2-tLMVxY-hWjt_467mWcdAyjIrggTDGo7FrZXC-VRJaw2FUXig2dpaHvhuoRcOxFpYfc' },
  { id: 'LW-002', name: 'Lumière Waterfront', location: 'Harbor Quay, Brooklyn', halls: 8, capacity: 1600, status: 'Operational', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhxG-egIN6SOQnnwkxzMxv__fQrWACZhq3n9BscjPD7BKY7dRCn6sBHwAyeSJewcssbKFMlODTZCmIIj8aiVKQKsioXRE4e8umTJBVS573lTmt9Lp-3w2CdOYcx2Y5yyAed3uGNK71jnQM6Z7dsgq__QxkVVGgxUB1C8S-uLRTIa0DDhZqDlbcDfYhSBBaKXj0dwcx-xpm3P2KxbtZaIf495q8y4sou6kHwrG1joqLP0Vpx1knq5KpV2A5fHeHz1OmMCactR0pPkQ' },
  { id: 'LH-003', name: 'Lumière Heights', location: 'Summit Plaza, Queens', halls: 10, capacity: 1950, status: 'Maintenance', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7XLdM7CgjwKSlk3tlh5VfKO-MALEZjUiFZcnr0N3Fcze5WaI5iEzCdvy858sdgubMTJQq_eWrU_e-jCUr9PvKs4EF_cM3k4979BUK_qN0LWg4EghbPNjnZYzcCeiw6oAdYOvX0sJ3l1jn84WrddHcTSMV9ZaHNPqbK5nceGIU_nvZBhg4FB5UFBEm2qrJJYjxZ_qSBNJWTT1i7CYHbeGtFuGsHa4RDFPaVB4S2dw_j7IjaLyXIf-v_Mrn3eRd_78sCG4SruLlsY' },
  { id: 'LG-004', name: 'Lumière Gardens', location: 'Park Slope, Brooklyn', halls: 6, capacity: 900, status: 'Operational', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpHD43E38xhi1YfmjZXLi24cIogqZXsNNlD9SZXYQEYKjBHORRcmrkrh6nErUki4MZn3izhuT-Q0BVGF9XOoVnJQvUhX_x_jUBw6I2CSH6D1OnPeFqBWcnABMGJfOLzjVlI_Bl-N-qcDgGawZ5djt8WyfATYAy9HCAxT64JQ6cyN-pG_QURIZ_ka8T3hBD0ZCzp34lPfe11GLkUePHb8ShRGr52Gg6OvEIaXWVQpGmMOkgHDySfnbpPVNai0aB6Rva2gPthZySTCw' },
];

export const vouchers = [
  { code: 'SUMMER20', discount: '20% Off', expiry: 'Aug 30, 2024', usage: 412, limit: 500, status: 'Active' },
  { code: 'NEWBIE50', discount: '50% Off', expiry: 'Dec 15, 2024', usage: 88, limit: '∞', status: 'Active' },
  { code: 'WINTER23', discount: '15% Off', expiry: 'Jan 01, 2024', usage: 500, limit: 500, status: 'Expired' },
  { code: 'BOGO2024', discount: 'B1G1 Free', expiry: 'Oct 12, 2024', usage: 1204, limit: '∞', status: 'Active' },
  { code: 'FLASH5', discount: '$5 Flat', expiry: 'Feb 14, 2024', usage: 42, limit: 100, status: 'Inactive' },
];

export const users = [
  { id: '#LUM-9402', name: 'Sarah Jenkins', email: 's.jenkins@example.com', phone: '+1 (555) 012-3456', status: 'Gold', joined: 'Oct 12, 2023', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJIPTtm_BS-ydhwSRfT0jyb_RZzyID5ZvSrPrXZjRyd9PnvG-BR_25cz84jGKSHaMKgWhsR3z4cLj1Ia9tg_KB0VajT6fZr6W4vE-hHIPH-x90VdhgyTTPgAOYKus6jKOLClR1MVH0z3NmLCz2PJDNuFziP2RaKVqO0LVk-EUZgnBjx9jAcCeXhEbNX4MQQcqpibZ7ebZACieyfsaJULtuzEeKxkGAd6nKNfH4GpK4W7DDnAYvCDk4EG0KJWYbAtf11jEN45mcG8' },
  { id: '#LUM-8291', name: 'David Chen', email: 'd.chen.creative@web.com', phone: '+1 (555) 782-1192', status: 'Standard', joined: 'Jan 05, 2024', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv63r7lCvHqX_v4el4cCXC2MamjoB6TYKEj3XKqrV5QV-_9jscE-BVwFrJMRXGAIeu4HOmyx83HhxNMNwshnElMv6UA5O8SWWLsw64Rd8jcPBlf2gtYpG4K4awgW_T4E6O2NIuAlcRGAC80AGJnfIxocL3oIXjPBs9HW21z0jn7ZyKSjlLaOqHPAp-iNEWg5yp-f9BLfyv4V6BnNqt8swndoypRqPAg-3cpbHXV5dqtK2j_SExHoRHV09ZalvkGhHiTNflGQ7qSHw' },
  { id: '#LUM-2210', name: 'Marcus Edwards', email: 'marcus.e@provider.net', phone: '+1 (555) 234-9981', status: 'Platinum', joined: 'Mar 22, 2023', avatar: '' },
  { id: '#LUM-1054', name: 'Elena Rodriguez', email: 'elena.rod@mail.com', phone: '+1 (555) 661-0022', status: 'Gold', joined: 'Dec 30, 2023', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQPJU_uFiuJdnJUK6iVy27MXnEG4iVS7ouE55t8PWcraLJ5VaYziUuFTtKzDaI-YiYkQQu92YX3aBJCThYhXSIU0JgvCTp4oX2OKDToLHcaW7nF9-27Ut7r5u5GwYXz8HBKcbf-OLz-FR4ErnIo2025VWhtZ2lBJTeZwZL6OoWt_XMhdjG_LExsuDybPhp0YRzS_MuGD-GiodhsSJrhcEBfdRKEFETdt1LRP1IDaHPbR1pseQbGXKmx8vbsAf06jlJogS2sBhBfRs' },
  { id: '#LUM-7731', name: 'James Wilson', email: 'j.wilson@fastmail.com', phone: '+1 (555) 443-8821', status: 'Standard', joined: 'Feb 14, 2024', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDePBpIGd-3-gDqA39FBzhtfjT5YsxI18jbnlL1I2pvWW5CLSQ3Smd3dgWj125KZBKBQeIwmUnIyDClH53OS5J1zmJFJRqgmABqfRhZjl08JgMadyYCUvCvvycGFF-FGGbeWjjimIs_9PdiEjghqJAVLSMX9ddkMyWCmPhqFXlDDKqqP-ceSrl91DA-rbt1viRXfEgCnmVsifyue_zi_6F6zojh2MrF2OddoR04wWmJ14SjFSViAJju8N8huaA55R1LWfHukzLY0ns' },
];

export const movies = [
  { id: 1, title: 'Interstellar', director: 'Christopher Nolan', genre: 'SCI-FI / DRAMA', rating: 8.7, release: 'Nov 07, 2014', status: 'Showing', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEmPHyN3o_LoR1NC1oKvC1hiMGmGcH9kjpk0HGdSEOhfnQoC-xWfdJRSefsLKfbqEho-JOSqYszgYA6ycfM5TQTsg9ASrLnj1Or9hcjRKqeKj-4Qe8s6gpc8g5ld2e-JIcvmu36dWdWSExbguIA1zmv_AG-JKBluUIDZrGE48f6c19A3GJ58QKkxomAxDXoTXIG708S_EKrBr1wLnzGM3zEU1UibkkiqlCh_IaRZdZkp7wLQpM3Z12tfOrwfX_etL4BEryftra4HY' },
  { id: 2, title: 'The Batman', director: 'Matt Reeves', genre: 'ACTION / CRIME', rating: 7.8, release: 'Mar 04, 2022', status: 'Upcoming', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs4Oe-76M758jIsNckJZ88ZhE3GHNbTBS0us2NHLorPtBSsXvoXeByCh_diFKjl0BW-14dhSlL1Eg1Zsy-URMlTptEm1bgNsAh2mdKTV-H27LlxeFw7a8jaPxsFvsllUI6YJksDYncpT3wtLFJGr6giLuYIrYm68Wk8JIvJ2vFOwaBnzo5VgA_YbBVoG2d4TLWTOkPqcXZBX74Hr2cJQDn1AQvdPy8oe3GFCk8ZRY0WL9gGeHu13CpxlqqXpwh0R8Hgls31xA3cWU' },
  { id: 3, title: 'Dune: Part Two', director: 'Denis Villeneuve', genre: 'ADVENTURE / SCI-FI', rating: 8.9, release: 'Mar 01, 2024', status: 'Showing', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChUUNKThyvXSro4iAKUW4--hx5sO6HKqe9JcMxHjUqcv6cxjmp2DBIeGNpc62evqglvu6xUGI9wH7d96575X46E34GcvlWrHGCcJ-2v07uw2iY-wfRD1L2XVpcTemxoaj8YdDLJUYlV52_f3brKFJNc9wBJGVJFx_uLDuDWh6SRn1CLVwbdDm4eujmdbO1n0iZ7QjDJ8pk3ft8zEa0hIjsECtTufBtQ_2nsEF1YLnhWIWLP5R51Q4YQDE5jLRRi1ksKNswXKypp4k' },
  { id: 4, title: 'The Godfather', director: 'Francis Ford Coppola', genre: 'DRAMA / CRIME', rating: 9.2, release: 'Mar 24, 1972', status: 'Archived', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJvnwSIbqGLdytE6IS9ixEgr-z5kIo8a4TNkknZ84mfcPxyMa099O0bYbgbe9y0peyu2czYOx6h4OsrufzkKluPck_eDRVU8mNFgzNtvwCFmkV2uko_fKAvlZWaH34Quzsjh-Qmp1rcNnL52PyyYDTGTmrOvxajpusTY0w1MPF6p6efo-J2Fe-ZavK0YyDE-VoYAAqdGLuQKI3Jo4rm7jfXmce1YAvo_cwALb0IHI0CuhApsxdyfWR_5U22pEtuQDer9jaP9OECTM' },
];

export const bookings = [
  { movie: 'Midnight Echoes', user: 'Sarah Jenkins', datetime: 'Oct 24, 2024 · 19:30', amount: '$24.50', status: 'Confirmed' },
  { movie: 'The Last Neon', user: 'David Chen', datetime: 'Oct 24, 2024 · 21:00', amount: '$18.00', status: 'Pending' },
  { movie: 'Desert Mirage', user: 'Maria Garcia', datetime: 'Oct 23, 2024 · 18:15', amount: '$32.00', status: 'Confirmed' },
  { movie: 'Ocean\'s Whispers', user: 'James Wilson', datetime: 'Oct 23, 2024 · 22:45', amount: '$15.50', status: 'Cancelled' },
];
