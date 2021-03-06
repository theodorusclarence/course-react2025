import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import SiteTable from '@/components/SiteTable';
import SiteTableHeader from '@/components/SiteTableHeader';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { useAuth } from '../lib/auth';

export default function Dashboard() {
    const { user } = useAuth();
    const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

    if (!data) {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        );
    }
    return (
        <DashboardShell>
            <SiteTableHeader />
            {data.sites.length !== 0 ? (
                <SiteTable sites={data.sites} />
            ) : (
                <EmptyState />
            )}
        </DashboardShell>
    );
}
